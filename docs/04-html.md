---
title: HTML
sidebar_label: 02-12-2021 | HTML
---

## Class recordings
Recordings of this recitation are now posted the folder that I have shared with you on Panopto: <https://uncch.hosted.panopto.com/>. I have updated the Table of Contents to help you find the section you need.I failed to record the HTML overview part for the 8:00 a.m. class. Btu you can see it in the 10:10 class. Find it in the table of contents around the 44:00 minute mark.

## Basics Wrapup and Forum Post 1
Please wrap up any outstanding Basics assignments very soon. You should not be locked out of forum posting if you have fallen behind. It is better to be late than to skip making a post. Don't post two posts in one folder. If you want to make extra posts more often, go to the next folder. This is important for grading.

## Hard Code a Web Page

1. Right click on your desktop and create a folder.
2. Name the folder task02-01.
3. Open up your text editor. (It is helpful to use a text editor that has a project sidebar to follow along in class. VS Code and Brackets show project files in a sidebar. If you are using a non-sidbar editor, you will need to create files and save them in the finder (Mac) or explorer (PC). I will demo both in class.
4. Open the folder:
   * Drag the folder onto your text-editor side bar,
   * or choose to open the folder using the menu or icons.
   * Any changes you make in the sidebar will affect the file on your desktop and vice-versa.
5. Right click in the sidebar and create a new file. Name it ```index.html```. **Do not get creative with this. Every website root directory must have an index.html file with a lower case "i".**
6. Right click in the sidebar and create another new file. Name it. ```notes.txt```.

## Confirm in Browser

You will need to open up a browser to view your progress as you go along.

From within your editor sidebar, you can open the folder on your desktop. (This can be helpful if you have your folder in a subfolder.) To do this, right click on your ```index.html``` file name and choose reveal in finder. You can double click the file and it will open in your default browser. If you do not wish to open the file with the default browser, drag the ```index.html``` file onto the desired browser window.

At this point in the class you should be able to follow along with the class demo.

1. We will start coding in the ```notes.txt``` file to see how the text behaves there.
2. Then we will code some in the ```index.html``` file to see if the text behaves any differently.

This will introduce the concept of an **IDE: an integrated development environment**. You will see that your text editor is more "helpful" with html suggestions if you are working with an html file.

## Saving

Remember that you must save the file in your editor before you can preview your code in a browser. Look for the little dot next to the file name in the top tab.

## Caching

Beware of “caching.” Web browsers will sometimes, but not always, save a copy of your webpage that is essentially invisible to you. The reason for this is to save resources everywhere; time, server hardware, client hardware. Electricity is needed to drive the web. caching makes sites faster and more affordable for everyone. But it can really be a big headache when you are creating websites.

**Solution:** Proof your site in incognito or private mode.

## Viewing Code

Right-click on web page and choose view source to see your code. Be careful not to right-click on an image. If you do, you will see the image property data, and not the code.
Put all of your files in one "Root" folder

Images, PDFs pages all must be in the root folder. Copy all of you images into the root folder. Avoid linking to images on the web not in your folder. That is called “hotlinking” and makes your page dependent on that server. If you don't have permission to "hotlink" then you are effectively [stealing bandwidth](https://www.keycdn.com/support/what-is-hotlinking). It is okay to link to an image that directs you to that page.

## SFTP to Opal
:::caution
**The text editors that we are using do not allow for file uploading. You will need to use your sftp program.** Remember that you need to put your folder in the ```public_html``` folder for it to be visible via a web browser.
:::

To log into opal with your SFTP program enter ```opal.ils.unc.edu``` for the server and your username is your ```onyen```. Your password is your onyen password. After you upload your folder to the public_html directory in opal, you will need to direct your browser to ```https://opal.ils.unc.edu/~youronyen``` to confirm it has uploaded correctly uploaded.h
