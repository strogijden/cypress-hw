# HW review

**Browserslist**

> I had to move contents of `browserlist` to package.json as cypress v8.1 was conflicting with this file...

One of the ideas I got here that you could actually avoid mixing of app and test codebases and have cypress setup with tests in a
separate folder, so there would be lot less conflicts similar to that you mentioned.

**TSLint**

> /* tslint:disable:no-namespace */
>
> import { noProductsFound } from './constants';
>
> ...

**tslint** is [deprecated](https://www.infoq.com/news/2019/02/tslint-deprecated-eslint/#:~:text=Palantir%2C%20the%20creators%20of%20TSLint,linting%20solution%20for%20TypeScript%20users.), 
you should better avoid it, a better way could be to simply disable `tests` folder. A better linter is ESLint with cypress plugin [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress).


**Mochaawesome**

The reporter you added looks great - good job 👍

![mochaawesome-reporter.png](./docs/mochaawesome-reporter.png)


**Fuzzy search**

Good point 🦅. I didn't consider this functionality. Indeed, it could improve the actual search.

> Fuzzy search would be better ...

**Data issues**

⚠️ when you click on listing 3, it will return data for listing 1. We added it as "easter-egg" for the candidates as attentiveness exercise.
Probably you noticed it, but it was expected it would be documented in report.

![easter-egg-incorrect-data](./docs/easter-egg-incorrect-data.png)


**Cypress commands**

> I tried using the cypress suggested pattern of defining custom `cy` commands

This is a good strategy, there is a [post](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/) on this topic.

One comment here - it makes sense to move commands outside of `support/index` to a separate file`commands.ts`
Then you could simply import it `import './commands';`. Also you could store type definitions for commands in `*.d.ts` file.

**Unneeded fixture**

Seems, there is no usage of this fixture.
```ts
export const vNeck: ProductInformation = {
    listingPath: '/list/2',
    title: 'Unisex Jersey Short Sleeve V-Neck Tee',
    brand: 'By Bella+Canvas STTM543',
    availableCombos: '8 sizes • 23 colors • 8 print providers',
    pricePattern: /From USD \d\.\d\d/,
    premiumPricePattern: /From USD \d\.\d\d with Printify Premium/,
};
```
