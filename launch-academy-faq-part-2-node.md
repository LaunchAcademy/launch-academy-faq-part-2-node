## Introduction

Continuing your work with the Launch Academy FAQ from last week, it's time to make some upgrades. Now you'll refactor the site to use an API endpoint with Fetch and add a third-party API!

## Setup

From your challenges directory, run the following:

```no-highlight
et get launch-academy-faq-part-2-node
cd launch-academy-faq-part-2-node
yarn install
yarn run dev
```

In a second terminal, run:

```
yarn run dev:client
```

Then, visit <http://localhost:3000> in your browser. You should see a starter version of the code that should look close to your finished version from Part 1 last week. Make sure to review the code provided before proceeding. _Note: The `FAQList` is the provided top-level component rather than `App.js` that you may have seen in your original Launch FAQ assignment._

## Instructions

This assignment is a multi-part, multi-day challenge in which you should not expect to complete it all in one sitting. Expect that there will be other lessons you will need to complete to gain the knowledge and experience for this challenge.

### Part 1: Use `fetch` to GET data

Starting with `questions`, we would like to refactor the app to **retrieve data from an API** (which has been provided).

1. Create a `fetch` call in the appropriate React component. This `fetch` call should request data from <http://localhost:3000/api/v1/questions>
2. Use the data from the response to pass the provided `Question` components the data they need.

### Part 2: Use `fetch` to POST data

Your web application is coming together! Let's now give our app the ability to create new FAQs. You will need to create a React form that will **POST data to an API**. The POST endpoint has been provided.

Use `fetch` to make a POST request to <http://localhost:3000/api/v1/questions>. Consider what steps you will need to take to complete this feature.

- How many components will you need? Where could you create them in your current component tree?
- How many fields will your form need?
- How will the user know that the form submitted correctly? How can we validate user input?

Keep in mind that your code may look different compared to someone else. Know that `app.js` is configured such that you should not need to write any new code in `app.js` to make this feature work.

The `post "/api/v1/questions"` endpoint is expecting a new question JSON object that should match the key-value pairs below:

```json
{
  "question": "What is Launch Academy?",
  "answer": "Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team"
}
```

### Part 3: Add React Router to Your Application

Our application is growing. It's going to need some _routes_ if we want to give it room to grow!

**Step One:** Create a new component, `client/src/components/App.js`. This `App` component will be a stateless, functional component that will end up returning our `react-router` routes. Continue to complete the router setup and functionality.

**Step Two:** The `App` component needs to become our new top-level component! Have `main.js` render the `App` component instead of the `FAQList` component. You might want to test that it renders correctly before adding your routes and hooking up your old code.

Now you should add your routes to your `App` component. When I visit `"/"`, I should see the list of FAQ items appear on the page.

**Step Three:** Update your application to satisfy the following criteria. We suggest that you ensure that your app is working successfully after working through each piece of the criteria.

- When I visit `"/launchers"`, I should see an index of Launchers on the page. The `LauncherList` component has already been made for you and should render at this path.
- Add the correct fetch request such that this component now renders with a full list of famous Launch Academy students! (Check the provided API endpoints!)

**Step Four:** Add show pages for each Launcher!

- The name of each Launcher should be a React Router Link. E.g. `/launchers/2` should render the show page for "Jeffrey Crinou". You'll need to use the correct Launcher `id` in your path to get this to work successfully.
- When I visit `/launchers/:id`, I should see a show page with all of the relevant info for a Launcher with that `id`. You'll need to create a `LauncherShow` component to satisfy this last step.

By golly, you have done it!

### Part 4: Integrate a Third Part API! 

Integrate a Third Party API of your choice into the app! 

While you can integrate any API of your choice into the app, we recommend one of two simpler APIs for your first go: 
* [SWAPI (Star Wars) API][swapi]
* [GIPHY API][giphy]

#### Suggested Features: SWAPI

- When I visit `"/launchers/space"`, I should see an index of Star Wars characters on the page. Feel free to mimic the `LauncherList` component! Ideally, the name, species, and homeworld of each character should be visible on the page. 
- This page should make a fetch request first to your backend, and then from your backend to the SWAPI API. 
- Add the correct fetch request such that this component now renders with a full list of Star Wars characters, each of whom suddenly finds themselves just as interested in web development as in saving/over-throwing the current galactic order. 

By the end of this feature, the name of each Star Wars character from `https://swapi.dev/api/people/` endpoint should be visible on the page. 

#### Suggested Features: GIPHY

- Update the Launchers index page to display a random GIF in addition to the name of each Launcher. The displayed GIF should use the name of the Launcher to query for a relevant GIF.
- This page should make a fetch request first to your backend, and then from your backend to the GIPHY API. **Note: You will need to apply for an API key from GIPHY in order to complete this step.** 
- Update your **existing** fetch request on this page to hit the same endpoint you used for the previous implementation of this page, but now with additional GIF information. This will likely mean fiddling with the existing Launcher data structure.

Then, `et submit` your code.

[swapi]: https://swapi.dev/
[giphy]: https://developers.giphy.com/
