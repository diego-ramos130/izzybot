'use strict';

/** order of concerns:
 * 1. get the bot to leave and rejoin a vc.
 * 2. get the bot to play a youtube/soundcloud/etc through the vc.
 * 3. create a queue for the bot to autoplay videos.
 * 4. create commands for this queue: play, pause, stop, skip, queue, remove etc.
 * play command: if the track is in the state of pause, resume playing it. switch state to play.
 * pause: if the track is in the state of play, switch state to pause and pause the media.
 * skip: regardless of state, skip to next track. If queue is empty, the bot plays nothing.
 * queue: adds a track to the back of the list.
 * remove: removes a track from the list.
 * leave: the bot leaves the vc it's in.
 * join: the bot joins the vc that the user calls from. */
