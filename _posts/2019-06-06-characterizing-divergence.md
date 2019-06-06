---
layout: post
title: Characterizing Divergence in Deep Q Learning?
---

> [Link to paper](https://arxiv.org/pdf/1903.08894.pdf) 

<!-- MarkdownTOC -->

- [Towards Characterizing Divergence in Deep RL](#towards-characterizing-divergence-in-deep-rl)
    - [What is RL?](#what-is-rl)
        - [Introduction](#introduction)
        - [The Bellman equation](#the-bellman-equation)
        - [Function approximation and the deadly triad](#function-approximation-and-the-deadly-triad)
    - [Characterising Divergence](#characterising-divergence)
        - [The key equation](#the-key-equation)
        - [Derivation](#derivation)
        - [Contraction Maps](#contraction-maps)
        - [$\mathcal U$ as a map](#%24mathcal-u%24-as-a-map)
        - [Some \(formalised\) heuristics for when divergences will not occur](#some-formalised-heuristics-for-when-divergences-will-not-occur)
    - [A solution - PreQN](#a-solution---preqn)

<!-- /MarkdownTOC -->


# Towards Characterizing Divergence in Deep RL

## What is RL?
### Introduction
Deep reinforcement learning (RL) is an area of machine learning around how agents should take actions to maximise some cumulative reward. It is used when the AI has to choose actions to try to achieve some objective, where the best action can depend on the the situation the AI is in, and the environment may not be deterministic. Some currently popular examples:

* [**AlphaZero**](https://deepmind.com/blog/alphago-zero-learning-scratch/) which is able play both Go and chess and beat world champions
* [**AlphaStar**](https://www.theverge.com/2019/1/24/18196135/google-deepmind-ai-starcraft-2-victory) which can play StarCraft and beat human pros
* [Gentle Manipulation](https://sites.google.com/view/gentlemanipulation) which can successfully interact with an object in the real world which may be fragile

Let's take StarCraft as an example: StarCraft is like any real-time strategy game. The AI needs to make a decision now, but the full benefits or costs of this action may not be received until far into the future. Moreover, the benefits may be somewhat random - they may depend on the opponent's actions (which are probably not deterministic), or on certain rewards which are generated randomly.
