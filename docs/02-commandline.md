---
title: Command Line
sidebar_label: 01-29-2021 | Command Line

---

## This Session has been completed; Class Recording details:
I had an issue recording the 10:10 am class because I recorded on the wrong computer when I was working online with two computers. So it has major problems. However, if you missed either class and you want to see all that was covered, The 8:00 am class is available to view.

* [01/29/21 8:00 am Command Line Recitation](https://uncch.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c7a49e6c-c5b9-4cf3-bb9f-acbf00f9e801)

## Panopto Videos 

These videos are a bit more polished than the class recordings and are more to the point in helping you get your Task 01.04 completed:

* [Task 01.04 Create a Directory (PC) on UNC Panopto](https://uncch.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=62ced691-1057-4b97-b6a3-acc2000e9d43)
* [Task 01.04  Create a Directory (Mac) on UNC Panopto](https://uncch.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1aef65d8-0474-4751-adf7-acc00141804f)

:::tip
**Permissions have already been set for your account. There is no need to set permissions.**
:::

I saw a few of these double extension issues when grading the VPN submissions:

```
lastname-firstname-vpn.png.PNG
```

This will not really be an issue when you are coding with a robust text editor like [Brackets](http://brackets.io/), [Atom](https://atom.io/), or [VSCode](https://code.visualstudio.com/) as extensions will alway show up in the sidebar of the app, and you can rename files in the sidebar. However, if you are curious about how to show or hide extensions, here are some videos:

* [Windows help](https://www.youtube.com/watch?v=PoTah9YBG2Y)
* [Mac Help](https://www.youtube.com/watch?v=ylbme95jnEo)

If you have time before class, make a short post on something you read about in one of your subscription newsletters, or anything else that interests you. I prefer that you make a forum post before doing your starter, but you may do the forum post after doing the starter, if you wish. (A forum post must backup your starter.) We need to try to get 2-3 short starters done each recitation class. (Otherwise, we will have too many students wanting to do them as the semester ends.)

If you are having trouble finding the [Technology Review Newsletter signup](https://forms.technologyreview.com/the-download/) Subscription **<<< this link works**.


## Eduroam or VPN

If you do not have access to UNC Eduroam, you must have your VPN client installed and connected before you can log into OPAL.

![vpn image](/img/active-vpn-example.png)

## Get to Know the Tilde

It's the <kbd>shift + backtick</kbd> under, or near, the <kbd>esc</kbd> key:

![tilde](/img/tilde.png).


## OPAL Accounts Have been Created

>Important: Replace **onyen** with your personal onyen. Example: **opal.ils.unc.edu/~kellyd**

Open a browser and go to:

```
opal.ils.unc.edu/~<onyen>
```  

If you see **Forbidden** message, that means you have an account, but you have permission problems. Let me know in the Zoom chat if
this is that case for you. This semester, the permissions should have been set for you.

Darth Vader **does not** have an account on opal, so he **can't be found**: <https://opal.ils.unc.edu/~darthv>

```
The requested URL /~darthv was not found on this server.
```

My onyen is lblakej. I have an account and I have set my permissions, so you can see my site directory: <https://opal.ils.unc.edu/~lblakej>

```
Index of /~lblakej
```

There is nothing at the opal main page: <https://opal.ils.unc.edu/>; you will just see a blank browser window.

## Learning Objectives

log into OPAL ```ssh onyen@opal.ils.unc.edu```
1. Set up permissions so that I, you, and the world can view your files from a browser
3. create a directory
4. Practice some basic LINUX skills


When you create websites, you should verify your sites with Chrome and/or Firefox. At least use one of these to check/verify your coding. If you are only using Safari, then you are only seeing your site through a Mac "lens." If you are only using Microsoft Explorer or Edge, your are only seeing it as a "PC" user. Also, you need to understand that browsers "cache" pages to save network resources. So it may be necessary to view your website changes in private (Firefox) or incognito (Chrome) mode to see website updates.

## Log in

You can log into your OPAL account with current permission settings. You are going to change permissions to make your public_html directory veiwable to the world wide web.

Here is a permissions calculator to help you grasp the number system [Permissions Calculator](http://permissions-calculator.org/)

How to log in to OPAL
[Link to lecture Command Line web page](https://ils.unc.edu/courses/2020_spring/inls161_001/02a.03.command-line.html)

* Mac Users: Use Terminal
* PC Users: Use PowerShell or Command Prompt or GitBash

![password prompt image](/img/terminal-password-prompt.png)


## Viewing Your Webpage

After you have uploaded your files and set the correct permissions, your webpage will be viewable at https://opal.ils.unc.edu/~onyen/ . This will take you to the index page in your public_html folder; you can also navigate directly to other pages or subfolders you've added, such as https://opal.ils.unc.edu/~onyen/my_folder/my_page.html

## Create a Directory

[Create a Directory](https://ils.unc.edu/courses/2020_spring/inls161_001/02b.02.new-directory.html)

**Grading rubric:** You must follow file naming conventions: **NO SPACES**; no strange characters. Use hyphens or periods where you would have spaces. Try to stick with lowercase letters. After you have created your directory, open the related assignment and paste your link in the submission box.


## Helpful Links

* [Fosswire Unix/Linux Command Reference](https://files.fosswire.com/2007/08/fwunixref.pdf)
* [UNC ITS help sheet](https://github.com/ljonesdesign/161-recitations/blob/master/docs/files/unc-unix-help.pdf)
* [A Command Line Primer for Beginners](https://lifehacker.com/a-command-line-primer-for-beginners-5633909)


## Basics: Command Line Cheat Sheet
[What is the Bash Shell?](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

## Excellent YouTube Command line demos for Mac & PC

*These are optional, but highly recommended if you are interested in pursuing any type of web development.*

* [Absolute Beginner Guide to the Mac OS Terminal](https://www.youtube.com/watch?v=aKRYQsKR46I)
* [Command Line Interface Tutorial (with GitBash)](https://www.youtube.com/watch?v=sw9kdFka8rA)

If you decide to download [git for windows](https://gitforwindows.org) to tryout GitBash, just install with all of the default items.  

> The Git GUI will be installed, but you won't need that for this tutorial, and you probably will not ever use it. I don't ever use it. So that could be the one item that you uncheck and don't install.

GitBash is the easiest way to get to play with command line tools like you would on a Mac. Git is another thing altogether, and this video does not get into git or github. It is also possible now to install [Linux Ubuntu as a Subsystem on Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10), but it is too complicated to include in this course.
