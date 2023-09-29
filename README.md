# IMPORTANT ANNOUNCEMENT
Don't use this repository for now, please. I'll rewrite this someday in the future. For now, I archive this repository.
# JSprimecount
A JavaScript implementation of the algorithms for calculating the prime-counting function π(x) for x up to 1 trillion.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage examples](#usage-examples)
* [Command-line options](#Command-line-options)
* [Testing instructions](#testing-instructions)

## General info
This project is a JavaScript implementation of the algorithms for calculating the prime-counting function π(x) for x up to 1 trillion.
	
## Technologies
Project is created with:
* Node version: 14.17.6
* Mocha version: 9.1.2
* yargs version: 17.2.1
	
## Setup
Setup is easy. Just install the necessary packages using npm: 

```
$ npm install
```

## Usage examples

```
# Count the primes below 10^7
$ node main.js 1e7
```

## Command-line options

```
Usage: main.js x [options]

Positionals:
  x                                                                     [number]

Options:
  -v, --version  Show version number                                   [boolean]
      --phi      phi(x, a) counts the numbers <= x that are not divisible by any
                 of the first a primes Call it by --phi x a.
      --time     Display time in seconds.                              [boolean]
  -h, --help     Show help                                             [boolean]
```

## Testing instructions
To run the tests, run them using npm:

```
$ npm test
```
