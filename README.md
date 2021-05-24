Hi! I'm [Ansgar](https://github.com/gruns)! 👋 You probably got an email from me.

If you're like me, you get a lot of email.

I noticed, over time, that I spent a growing and appreciable portion of my time with email on grammar, formatting, and misspellings.

Typos.

But is that time well spent? I don't think so. Email's ingrained expecation is that every paragraph be well formatted and every sentence error free. I loathe that expectation.

At first, I added `Sent from my iPad` to mollify any mewling about my emails' brevity or mistakes. (I've never owned an iPad.) But I came to want something beyond blunting email's onerous expectation.

So I built Typo. It's an [Emacs major mode](https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) that purposefully makes my emails a little worse, but just so, in return for celerity.

Here's how it works:

*   Mispelled words aren't highlighted nor autocorrected. Typos remain.
*   The first word of short, standalone sentences is uncapitalized. E.g. `Great! See you at 2pm` becomes `great! see you at 2pm`.
*   Backwards searches ([`C-r`](https://www.gnu.org/software/emacs/manual/html_node/emacs/Basic-Isearch.html) in Emacs) now have an artificial 1 second delay to deter correcting text already written.
*   The trailing period of every paragraph's last sentence is removed. They're unnecessary; the whitespace of line breaks suffices.
*   Apostrophes in obvious contractions are removed. E.g. `Don't sweat it!` becomes `dont sweat it!`.

In short, Typo is a little tool to retrain my brain to get my point(s) across swiftly and get back to other things.

I hope my emails remain intelligible.

If you have any thoughts on Typo, please [email me](mailto:grunseid@gmail.com) (irony intended 🙂) and let me know.

<img src="logo.svg" alt="typo" style="width:24rem; height: auto; display: block; margin: 3rem auto 0 auto">