# MentHer
MentHer is a virtual mentorship platform that aims to connect girls interested in technology with professional female mentors to help advance their career. 

## Setup

Follow the shadcn/ui installation steps with NextJS.
1. `npx create-next-app@latest menther-app --typescript --tailwind --eslint`
2. cd into new folder
3. `npx shadcn-ui@latest init`

### Cleaning
1. Go to `app/page.tsx` and remove everything inside return();
2. Go to `app/layout.tsx `and change title and description.
3. Go to `globals.css` and add the following
```css
html,
body,
:root {
  height: 100%;
}
```

## Route Grouping
- used to organize components without affecting URL (since every page inside folder is a valid route)
- create a `(root)` folder inside `./app`
- each folder would get a `page.tsx` and `layout.tsx`


## Using shadcn
- we can import different components listed on their documentation
- when added, there will be a new component added to the `./components` folder.