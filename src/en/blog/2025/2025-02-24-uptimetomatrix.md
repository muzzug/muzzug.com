---
title: 'How to set up notifications from Uptime Kuma to Matrix'
date: 2025-02-24 16:55:26
updateDate: ''
slugOverride: 'uptimetoelement'
tags: [self hosting]
description: 'How to set up notifications from Uptime Kuma to Matrix. Quick and easy.'
layout: 'post.njk'
rssOnly: false
---

As I wrote in the Weekly Notes, I've started exploring self-hosting options. One of the tools I've looking at for a while was [Uptime Kuma](https://uptime.kuma.pet) — a tool for monitoring all sorts of things.

I've been using Uptime Robot for the availability of my sites so far, but if you can host something like that for “free”, why not, right?

One of the things I've been figuring out is where to get notifications sent. In the settings there was an option for [Matrix](https://matrix.org). We were used Matrix at work, among other things, for notifications, so I figured I'd try it here.

I already have it set up now, but I'll make a note here in case I ever do it again. And maybe it will help someone else too.

## How to do it
The setup is fairly simple — you only need 2 things to do it:
- a room within the Matrix where the notifications will go
- a user who will send the notifications

I created my own room for notifications, and I also created a new user based on the recommendation in the Uptime Kuma settings.

In Uptime Kuma you need to set the notification name, the Matrix server URL (in my case https://matrix.org), the Internal room ID, and the Access token of the user.

> ![Notification settings in Uptime Kuma](/images/uptimekuma.webp)
> Notification settings in Uptime Kuma

I'm using Element as my Matrix client, so finding the room ID and access token was done like this:
- Room Detail → Settings → Advanced → Internal room ID
- User detail → All settings → Help & About → Access token (at the very bottom)

Then all you had to do is enter the required information in the correct fields and set Default enabled to true for use this settings as the default for future monitors. In those, just overwrite the name and you're done. 🙂