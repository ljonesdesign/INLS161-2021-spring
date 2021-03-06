---
title: Website Checklist
---

Here is a checklist that you can use to make sure you have all the parts of your website done before posting to OPAL and submitting.

:::tip Grading Point Scale
[02.03 grading rubric](https://docs.google.com/spreadsheets/d/15xJiRcZNag7ZymqJ-0X6VNHegPlHtkeakk5dKLr31Mw/edit?usp=sharing) 
:::

:::note
Control+F (PC) and Command+F (Mac) will help you find what you are looking for on this page if you get stuck building your site. [Six Keyboard Shortcuts Every Computer User Should Know](https://lifehacker.com/six-keyboard-shortcuts-every-computer-user-should-know-5836288)
:::

1. Use Word to export a real or example **resume** in pdf format. Save it to your web project folder. Not sure about this? [See this video](https://www.youtube.com/watch?v=3Y-GeTi472A).

2. Find a **template**, verify it works for you and start building your site. See templates in the left sidebar for  for more information.

3. Confirm you have a **home page file named** ```index.html```. You *should not* have a file named ```home.html```. If you are using a one page type of theme, you will create sections. If you are using a multi-page theme, you will create pages.

4. Confirm you have an **About Section or Page**. If not, create one.

5. Create an **Interests Section or Page**.

6. Create a **Classes Section or Page**.

7. Home Page Content: email with an <https://www.albionresearch.com/misc/obfuscator.php> **obfuscated email address generator**. | [**How to do it**](/img/obfuscated-email.png) (This is not needed if you have a working Google Form.)

8. Home Page Content: **Image or graphic that loads fast and gets attention**.

9. About Page Content: Have some custom about info related to you. Add a **relative link to your resume file** in the code of your ```about.html``` page. If you saved it or put it in the right folder, you will be able to easily link to it.

10. If you did not save, or already put, a pdf formatted resume in your website project folder on your laptop, drag a copy named ```yourlastname-yourfirstname-resume.pdf``` into your project folder. You will need to link to this using a **RELATIVE** link. [See this static screen shot for help.](/img/resume.png) or [check out this animated gif](/img/resume.gif)

:::note
You cannot preview your resume pdf file in a text editor. So if you see a lot of raw code, or if you get an error message when you click on it while in the text editor, ignore it. What matters is that you can download it or view it in a browser based pdf plugin. Not every has a browser that can preview a pdf file. You will be graded on *will it download if clicked*.
:::

A **RELATIVE** URL points to a file within a web site:

```
<a href="firstname-lastname-resume.css">My Resume</a>
```
A **RELATIVE** URL can also point to a file within a directory in a web site:

```
<a href="files/firstname-lastname-resume.pdf">My Resume</a>
```

Don't use an absolute URL (contains an http:// link) to point to your resume on another server or even on the opal server:

```
<!-- don't do this: -->
<a href="http://www.example.com/firstname-lastname-resume.pdf">My Resume</a>
```

11. Classes Page Content: **Links to each class you are taking this semester**.

12. Interests Page Content: At least an **HTML ordered list**.

```
<ol>
 <li>book1</li>
 <li>book2</li>
 <li>book3</li>
 <li>book4</li>
 <li>book5</li>
 <li>book6</li>
 <li>book7</li>
 <li>book8</li>
 <li>book9</li>
 <li>book10</li>
</ol>
```

13. Third level pages or section: Three placeholder objects for links to tasks 3-5. [Single Page Example](/img/project-links-one-page.png) and [Multipage Example](/img/project-links-multi-page.png)

14. Every page should have a page last updated object.

```
<p>
  <script>
    document.write("Page last updated on " + document.lastModified);
 </script>
</p>
```

15. Make sure your **all your navigation links work**.

16. One **client side script**. (Javascript example.) See the Scripting notes in the left sidebar for more information. This is a specific required rubric item distinct from other rubric items that may or may not use javascript.

17. One **server side script**. (Google Form or Google Fonts or Google analytics.)

18. Make sure that **all of your images** have ```alt=&quot;Description&quot;``` attributes.

19. Verify that you **do not have any spaces in file or folder names**. *I count this as failed validation score.*

20. Verify that your image names and your source code CASE/CASE case/case match: (```image.jpg``` must point to ```image.jpg```) (```image.jpg``` cannot point to ```image.JPG``` on OPAL)

21. **Upload to Opal** with your SFTP program.

22. Check [**HTML validation**](https://validator.w3.org/): Copy a link from your home page and paste in the  validation form: i.e. ```https://opal.ils.unc.edu/~onyen/my-website/index.html```

23. Check [**CSS Validation**](https://jigsaw.w3.org/css-validator/): Use same URL: i.e. ```https://opal.ils.unc.edu/~onyen/my-website/index.html```

24. Do your best to **fix validation errors** that are obviously your code edits. If the issue is with your template, that will not count against you. For example, if you are using a bootstrap template, there will be some CSS validation issues with the ```bootstrap.min.css``` file; but, you should not be touching that file, so it is not your fault. (Unless you did indeed edit it by accident.) There may be some issues with cut and paste Google Font and Google Form code, as well. That will not affect your validation grade.

25. Submit your assignment in Sakai. Paste your url in the assignment text box. If you can't figure out your validation errors, mention that in the submission post.
