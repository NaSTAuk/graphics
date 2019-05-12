# Glossary

This file is full of useful explanations to what and how we refer to things.

## Contents

- [Glossary](#glossary)
  - [Contents](#contents)
  - [Users](#users)
  - [Component](#component)
    - [Admin Component](#admin-component)
    - [CG Component](#cg-component)
  - [Frameworks](#frameworks)
    - [Admin Panel](#admin-panel)
    - [CG Panel](#cg-panel)
    - [Core](#core)

## Users

People who do not necessarily develop this package, but rather use it as part
of their broadcast.

## Component

A Component is something that is used by users and consists of 2 subparts; an
Admin Component and a CG Component.

### Admin Component

An Admin Component controls a CG Component by e.g. updating text/ score values.

### CG Component

A CG Component is the view that is generated for consumption by a
graphics machine.

## Frameworks

Frameworks are things that the users do not necessarily need to understand, but 
control how things work and the mechanisms involved.

### Admin Panel

The mechanism for displaying Admin Components to users. They use this screen to
control all components.

### CG Panel

The webpage that is consumed inside the broadcast chain. This will display
things like the lower thirds. Users then just have to point their
graphics engine, like CasparCG, to this webpage.

### Core

This is the core package to coordinate the Admin and CG Panel's.
