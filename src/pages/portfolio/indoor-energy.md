---
title: Indoor Energy
description: Climate-control app for technicians
layout: page
type: client
date: "2018-02-28"
url: https://indoor.se/
hero_image: /static/indoor-energy/hero.jpg
metaDescription: Application for Indoor Energy that improves the management for climate-control technicians in a swift and effective way.
metaKeywords: management, climate-control, app, indoor
---

## Indoor has over 100 technicians on standby to take care of the air you and thousands of other people breathe.

With hundreds of orders to handle each year, the management system used by the technicians is a crucial part of the business.

The solutions today that handles reporting of service tasks are inadequate, complicated to use or otherwise not adapted to usability. The services technicians use every day for reporting time and travel costs needs to be fast, easy to navigate and perfectly tailored to the tasks being done. The ease of use should make it effective, reduce human errors and provide optimum work satisfaction, minimize manual handling and after the fact reduce the amount of needed paperwork.

I worked alongside great creative minds and technical developers as design lead to create a platform for service technicians to report time and travel distance with minimal needed thought, where I focused on the usability and design aspect creating conceptual sketches and graphics that would later be picked up by the developers and integrated to the SDF system used by Indoor.

We worked in sprints where I often did QA for the implementation of my own design, and acted as a project manager and lead designer that bridged the communication between external consultants, the client and developers.

### Solution

The start page provides support technicians a list of their tasks, and also serves as a starting point from where they easily can manage them. The top section gives an insight in how many hours he or she has repported on a paticular task for this week. Further down we see a list of service orders consisting of information the technician might find handy.

![Application overview](/static/indoor-energy/design-overview.jpg)

![Orders](/static/indoor-energy/design-order.jpg)

The application focuses on increased usability. The task page is presented with two tabs, "Service Order" and "Task Events" which displayes information neatly organized for the technicians. The overview at the top shows general task information such as case number and information about installation points.

### Starting a job and checking in

In addition to the ability to add notes whenever you want, the button in the bottom right corner is used to start a job and check in at a place.

When starting a job we use the current device time to speed up administration, but the technician has the option to pick their own start time shoud they need to. We also utilize the GPS position and calculate the driving distance between the technicians current position and the job location defined earlier.

The next step is to pick a time the technician arrives at the spot. The date picker functionality works the same way here, and you have additional options to select mileage and travel time. You can also report actual work time and add a note here, if needed.

![Start a job](/static/indoor-energy/design-startjob.jpg)

### Reporting cooling media interaction

Environmental protection agencies in Sweden demands all companies that works in this industry to report the usage of cooling media, and the technicians can easily do this during the normal app work flow through the same bottom right button as all other tasks.

If there are more than one aggregate to interact with, you get to choose one before continuing. From the next view, the technician has the ability to add or remove media from the installation, and finally they need to confirm the work by checking specific reminder boxes and reporting the time just as in previous screens.

![Reporting](/static/indoor-energy/design-reporting.jpg)

### Checking out and summarizing the day

Similarly to starting a job and checking in, when the technician leaves the workplace they need to provide us with some information to complete the task and workday.

If something is wrong, e.g. time has not been reported fully or too much time has been reported, we give the technician a few options to easily put those hours into a specific category slot - like reporting the missing time as free time or reporting overtime. If this is needed, warning triangles are displayed in various places throughout the reporting interface.

When summarizing the job the technician gets an overview of the whole job, involving all work days, and the ability to easily make changes to each individual task if needed.

![Summary](/static/indoor-energy/design-summary.jpg)

## The technicians can now focus on the actual work they do, instead of previously time consuming tasks such as administrative paperwork.

We created an environment which guides the tehcnicians all the way from when they get into the service car in the morning up until they go home for the day. An app where your work stays up to date by making it easy to report time, material and travel distance without the need for any administrative skills.
