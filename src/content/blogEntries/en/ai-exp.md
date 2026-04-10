---
title: My experience with AIs and recommendations
preview_description: How to make the most of AI use.
translationKey: ia-exp
create_at: 2026-04-10T13:25:00.000z
---

First of all, my opinion regarding AI is what would commonly be called that of a skeptic. Not in the sense that I hate it—I think it's a very good tool depending on the use and how you use it. What I do say is that I'm tired of companies that constantly bombard us with their narrative about how they're going to change the future, how AI is going to make things better, and a long etcetera of public relations actions to deceive investors with little or no knowledge of the subject.

# My criticism

From too many places, we're beginning to see the effects of AI abuse: from big companies that have taken the hardware market to absurd extremes, to companies that have eliminated large parts of their staff and replaced them with LLMs in a crude attempt to cut costs (PS: it doesn't work out well). I agree that it can increase work efficiency in the short term—I've tried it myself—and it can even give that false sense of speed, but as I said, in the short term. The first symptoms appear when you get to do the task that you probably spend the most time on as a programmer: debugging, or solving errors—for those not in the field. If you've been working on the same thing for a few hours, you can eventually know where an error occurs; you can also see edge cases while working. But when an AI generates everything, and those errors come—because they will come, whether you like it or not—you not only have to see where the error is, but also understand what the AI has "spat out" for you over the last half hour. In the end, you end up spending the same or more time than if you had done it yourself, and you're much more frustrated.

Another point where you notice this is in large projects. In the end, due to the very nature of LLMs, they have an information context limit. A human, although also limited, has the ability to ignore or summarize things that "don't matter" and continue expanding the context; not to mention that we are capable of knowing not just what we need to do one step ahead, but several steps ahead, unlike our algorithmic companions. This ends up showing in the effect that if you don't specify everything you have in mind from start to finish, the model will end up deviating from what you had in mind to solve it. This has led us to something totally dystopian like **Spec Driven Development**. For those unfamiliar with the topic, I leave [here](https://www.youtube.com/watch?v=nnUMJX9013Y) a link that explains quite well what it consists of, but to summarize: you stop doing what you studied, that is, programming (I say this for those like me who studied programming), and instead, you dedicate yourself to making a super detailed manual of what the AI should implement, which patterns to follow, which architecture, and basically everything, so that the AI does it for you. Some bosses might be delighted with this idea, but from my perspective, both as a person and as a programmer, it seems like an aberration. One, because it's inevitable that you'll be able to completely detail in words everything that needs to be done; natural language leaves too much room for implicit interpretations. And second, in relation to the above: it's when you're working on that code that you see many strange cases that can occur. If you have to build a mental model of an entire application, it's guaranteed (unless you're a prodigy) that you'll leave cases uncovered, because your brain simply abstracts all that and takes it for granted.

And all this only talking about the short term. If we look a little further ahead, what can we predict? Well:
- If no one hires juniors, or those who are hired have their ability to learn by banging against the code eliminated, in 7 years the demand for seniors will be laughable.
- Although this is already beginning to be noticed, vulnerability gaps will be disastrous.
- I think this goes without saying, but the expected consumption of these AIs is being much lower than the actual consumption, and when that happens, the only way to justify the expense is to increase the usage price, which is already showing with dynamic TOKEN consumption systems based on time of day and user plan. If the price continues to rise, will it still be profitable to have fired those juniors and replaced them with LLMs?

# Is it all bad criticism?

It might seem that I hate using ChatGPT or Claude with all my soul, among others, but that's far from reality. In fact, I use it practically every day, but in very controlled and specific ways. Regarding this, I conducted an experiment: [seeing my previous post](https://gasparkral.github.io/portafolio/blog/es/dnd/), you'll know that I like role-playing games, more specifically Dungeons & Dragons. Among other things, I decided to make an application to help me in my fantasy adventures, and for that I used Claude, but not just as an assistant, but specifically doing what I said above: detailing what I want and having Claude implement it as it sees fit as optimal. What did I find at the end of this process?
    1. D&D is really very complex to program, it has too many specific cases.
    2. When I ran out of TOKENs, well, nothing to do but wait until the next day to continue; a real case of maximum productivity.
    3. The graphical interface is the most generic thing I've ever seen. Despite giving artistic directions to make an interesting application, it had zero personality.
    4. The application works so-so; the mobile part leaves much to be desired, and the desktop part... well, it's "usable."
Some will say I wasn't specific enough, that I surely didn't explain things well, that it lacked context... The truth is, after a 13-page manual in Calibri 11, and direct access to my drive so it could read files if it needed more context, if it's not capable of doing the job, it's hard to place the blame.

LLMs, in my opinion, should not be substitutes for one's own work. I still remember when they started being used in IDE autocompletion systems; right there I began to feel effects I didn't like: standing still waiting for the autocompletion to appear, as if I had forgotten the syntax of a language I had spent many hours working on. Honestly, I think the best use is explanatory: having a teacher who can adjust to your exact level, who can create examples on the spot if you don't understand something when studying a new technology, or for very repetitive tasks, where the context is similar enough for the LLM to do it alone without generating errors. Those are good points.

# How I use AI

As I said, I mainly use Claude, in its desktop application format; now I'll go into detail about why. Also ChatGPT and DeepSeek for certain tasks.

## ChatGPT
Its use mainly falls on creative things. OpenAI's models have been trained on a good amount of humanistic, artistic, and design-related matters; probably much of it without attributing anything to their original creators. Anything that falls into **UI/UX** or image generation, things like that. I also use it for certain translations, as it tends to adjust the tone well to other languages, although if I have time, I prefer to do it myself directly.

## DeepSeek
This one has a bit of a trick. I use it for repetitive tasks, or those that require minor adjustments without much logic involved. Let's say it's the LLM I use when I want to save TOKENs on the others.

## Claude
Finally, the big one, the one I've worked the most to the point that I got blocked for three days. If guided, it can do good work that doesn't require investing much time afterward. I use it as follows: as I said, in its desktop version, it allows you to create "Projects," where you can add a lot of initial context, you can tell it the development tone to use, adjust the memory of conversations, and among other things, give it abilities through *MCPs* like reading or writing files. First, I prepare the project context, I tell it what is going to be developed, what is expected of the model. Then I give it a list of rules it must comply with, among which the most notable are:
- Do not modify files without explicit consent; I do this so that it allows me to read what it's going to do before launching.
- After any request, make a summarized explanation of what it's going to do, how, and what context it needs to develop it; I know this burns many TOKENs, but this way I can correct before moving to the next activity, which has saved me several times.
Another thing I like to do is use a personalized writing tone: basically, it acts as a senior mentor. When I ask it a question regarding knowledge, it doesn't give me the answer directly; instead, it asks me questions to guide me to the answer myself. If it sees that I'm not capable, it answers me directly, and then asks me a hypothetical question about the case to make sure I've understood it.

With these adjustments, I can work without fear of going in blind.
