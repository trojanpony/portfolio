---
title: Relaunching my blog. Again. 
date: 2022/12/22
description: My new personal blog/portfolio.
tag: web development
author: Micah Crenwelge 
---

# Relaunching my blog. Again. 

![Nextjs](/images/nextjs.png)

I am relaunching my personal website using Nextjs on Vercel. This is my fourth iteration on my personal website, the first two attempts were wordpress based sites, and the last one used Ghost CMS. Every time I start to make traction with my SEO some major life event causes me to put my personal website, which is invariably self hosted for no good reason, on the back burner. 

I have been wanting to get some experience using React, and spend more time doing actual development, rather then just using visual builders in wordpress. 
Honestly it's fun, and almost adictive for me to start things over completely, but it's also wasteful. So my intent this time around is to launch this thing in the cloud from the beginning, rather then trying to keep up with my own personal server. My criteria for this launch were:

* Relatively self contained and deployed via a git repository
* Static site using Markdown files as the data source
* Easiest possible implementation that I can improve on 

## Deploying my project from a git repository

![Github integration](/images/github-integration.png)

The reason for using git repository, is that I want to continue to practice and learn git versioning. I also want to continue to grow the body of evidence of my commitment to growth both to myself and to others by having my commit history tracked on github. As a side benefit, maybe someday I can cause some graph envy.

I also want to make use of the same tools I use for my other development projects such as my IDE Visual Studio Code (though I have flirted with the idea of going full hipster and completely switch to Vim in iTerm, but I have settled for a vim plugin instead). I am a fast typer (102 wpm) and I am burned out from using visual based website builders with lots of points and clicks, so I want to stay on my keyboard as much as I can, both for effeciency and to practice the skills I am trying to learn.

Git repositories also make it extremly easy to deploy the app anywhere I want, easily deploy new updates with frequent commits, I love the idea of nightly commits. So this was a huge motivation to not just relaunch my old Ghost blog.

## Markdown based website

As much as I love the convenience and minimalism of the Ghost CMS, which also utilizes Markdown for formatting posts, I wanted to be able to more easily publish my notes which I have recently been writing in Obsidian. Obsidian is a markdown based note taking app, and since my notes are already in markdown, as well as my old blog posts, I want to make it as easy as possible to utilize past work and share things that might be helpful for others.

## Implementing the easiest solution

![Vercel Personal Pricing](/images/vercel-pricing.png)

I accidently deployed my site on Vercel for free. By accidentilly, I mean they make it so easy to get started that I was clicking deploy before I even thought about what I was doing. I typically try to setup my own VPS or some other unecessarily complicated solution, but I guess I am commited now. All there is left to do is develop the site. 

Vercel allows you to deploy a single personal project for free, which is a huge plus. They also made it super easy for me to set up an account using my existing github account, and actually let me choose a template and create the repository without leaving the website. 

Then I connected my own personal domain name. It was easy as hell, and I am loving the experience so far. This took away a lot of decision fatigue from having to choose hosts, and what stack I would use, gatsby, nextjs, react, tailwindscss, etc. I just chose a template and I'm done. Whatever stack I get, I will figure out how to use. Which turns out to be somekind of nextjs template? I will figure out the implementation details as they become relevant.

![Vercel Personal Pricing](/images/domain-connectivity.png)

## Future vision 

I have seen some pretty impressive Vim setups on reddit, where people use Vim for everything from development, to notetaking, to publishing beautifully formatted LaTeX pdf's. I dream of one day utilizing Vim for everything and eliminate all the extra apps I have to keep up with and organize. I spent some time last semester going down that path, but I found myself getting to invested in learning Vim that I wasn't spending nearly enough time on studying and doing homework. This led me to abandone that course, and go back to implementing the easiest solutions first, before I start optimizing them. Thanks to the book Atomic Habits, the phrase "Standardize before you optimize" has become a bit of a personal mantra for me recently. I am always trying to start off with the optimal implementation from the beginning, which leads me to spend way to much time on the most basic of tasks until I get so burned out and quit. I am starting to recognize that consistency is more important for me then finding the most optimal solutions. That is why I have gone with the easiest solution first, one that I can continue to improve on over time. Maybe someday, I will use Vim for everything, or maybe as I go through the journey I will discover that I no longer want to go down that route at all. 