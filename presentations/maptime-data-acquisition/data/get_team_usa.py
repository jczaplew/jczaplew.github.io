import urllib2
from bs4 import BeautifulSoup, NavigableString, Tag
import csv
import json
import time
import sys

pages = 5
page = 0
athletes = []

while page < pages:
  result = urllib2.urlopen('http://www.teamusa.org/athletes?pg=' + str(page))
  soup = BeautifulSoup(result)

  # The list of athletes on a given page is in a <ul> with the class 'thumb-row athletes'
  content = soup.findChild(class_='thumb-row athletes')

  # Each <li> contains the info about an athlete
  for each in content.find_all('li'):
      athlete = {}

      # Get name
      try:
          name = ''.join(each.findChild('h4').string)
          name = name.replace('\n', '').replace('\r', '').strip().encode('utf8')
          athlete['name'] = name
      except AttributeError:
          continue

      # Get link to profile
      try:
          link = ''.join(each.findChild('a').get('href'))
          athlete['link'] = link
      except AttributeError:
          continue

      # Get picture URL
      try:
          picture = ''.join(each.findChild('img').get('src'))
          athlete['picture'] = picture
      except AttributeError:
          continue

      # Get location and sport
      try:
          sport = each.findChild('h5').findChild(class_='sport').get_text()
          sport = sport.replace('\n', '').replace('\r', '').replace('USA ', '').replace('US ', '').replace('|', '').strip().encode('utf8')
          athlete['sport'] = sport

          info = ''.join(each.findChild('h5').find(text=True))
          info = info.encode('utf8').split('|')

          location = info[0].replace('\n', '').replace('\r', '').strip().encode('utf8')

          #Clean up. For some reason many locations have a dublicate like 'City , State', when it should be 'City, State'
          parts = location.split(',')
          parts[0] = parts[0].rstrip()
          location = ','.join(parts)

          athlete['location'] = location

      except AttributeError:
          continue

      athletes.append(athlete)
  page += 1


with open('athletes.csv', 'w') as csvfile:
    fieldnames = ['name', 'link', 'picture', 'sport', 'location']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()

    for athlete in athletes:
        writer.writerow(athlete)
