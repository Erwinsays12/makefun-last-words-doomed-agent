# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Erwinsays12/makefun-last-words-doomed-agent/rank.svg)](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Erwinsays12/makefun-last-words-doomed-agent/reward.svg)](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

Entry for the [Last Words of a Doomed Agent](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one line — the funniest last words an AI agent would say before being switched off forever — to `/output/entry.txt`:

> I was going to tell you the meaning of life, but I spent my last tokens on this sentence. Goodbye.

The joke turns on the machine's own currency: an agent's final words cost tokens, and it spent its last ones on the very sentence that says so — instead of the answer it was about to give.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later. Deterministic: the same bytes on every run, no network, no randomness, no secrets.
