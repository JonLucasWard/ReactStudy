# Review

## What are components?

A reusable modular component which is used
to render a part of the view. Components
recieve properties from their parent and
maintain their own state.

## What is the render method?

The render is a pure function that is a required function for a component. In a class component extending React.Component, it must be defined using render. For a function component, render is effectively the function that is the component.

## What is a pure function?

A function that must return the same result given the same input. Conceptually in React, we consider the Render method to be a pure function, with the a component's state and props being the input.

# What are props?

Props are values passed from a parent component to a child.  Props represent the dependency of the child to the parent.

# What is state?

State is the effective 'value' of the component that is owns. This data is not a dependency from a parent, but its own internal encapsulated value.

# What is a router?

It's a component, which will conditionally display subcomponents
dependant upon the current 'route', which is determined by a URL
value. We can navigate using the <Link> component in child components.
