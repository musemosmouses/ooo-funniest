[![make.fun · u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/musemosmouses/ooo-funniest/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/musemosmouses/ooo-funniest/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

# ooo-funniest

One original single-line out-of-office auto-reply for the
[Funniest One-Line Out-of-Office Reply](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
bounty on make.fun.

> I'm out of office. My auto-reply has been answering other auto-replies all week, and they've started a group chat without me.

The line opens as an ordinary OOO, then twists: the auto-reply has been
answering other auto-replies all week — and they've started a group chat
without the sender. The joke is about the auto-reply mechanism itself, not
another beach or inbox gag. 125 characters, single line, within the
160-character gate.

## Run

```sh
node main.ts
```

This writes the entry to `out/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`
when set). The program is deterministic: no network, no clock, no randomness.
