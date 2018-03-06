[![Build Status](https://travis-ci.org/kolohelios/typescript-hapi.svg?branch=dev)](https://travis-ci.org/kolohelios/typescript-hapi)

To further explore TypeScript, and check in on Hapi's current state, I'm going to build a little service. Should be interesting. ;)

## Get Started

* run `npm i`
* run `npm run dev` (no need for nodemon or other watchers; FuseBox takes care of this for us)
The server will start on port 8000; edit and away and see your changes reflected.

## Hapi

Because of my partial masochistic tendencies, I'm going to make my life more difficult and consume v17 of Hapi, which the developers admit they are still in the process of doucmenting. It turns out, not even the example on their homepage works anymore. See [migration infomation](https://github.com/hapijs/hapi/issues/3658) for details. It's time to get comfortable with async/await anyway, isn't it?

## What is wrong with you?

Probably lots. Heh, I recognize that just because things are new doesn't make them better. On the other hand, there are some great new things on the frontier that do make the lives of developers easier. If we can, as developers, create features faster, than we can add more value for our customers in the same time unit. Also, the greatest hope is probably that maintainability is better.

### TypeScript? This is a server, not Angular 2/4/5+

TypeScript isn't just for Angular anymore. React, Vue.JS, and Aurelia developers have been using TypeScript more and more. Unfortunately, TypeScript doesn't mean we're necessarily writing better code, but it does serve to give us more of a fighting chance if we let it do its thing.

### Why Fuse-Box instead of Gulp or Grunt?

Fuse-Box is "TypeScript-first", if I may call it that. Gulp and Grunt are not.

### mariadb

#### Docker command

(and use a password a more complicated password than following)
`docker run -p 3306:3306 --name mariadbtest -e MYSQL_ROOT_PASSWORD=mypass -d mariadb`

#### schema creation:
```
CREATE SCHEMA `typescript-hapi` DEFAULT CHARACTER SET latin1;
```
