import TagCard from "./TagCard"
import { Meta, StoryFn } from "@storybook/react"

export default {
    title: 'TagCard',
    component: TagCard,
} as Meta

const Template: StoryFn = (args) => <TagCard tagName={""} posts={0} {...args} />

export const React = Template.bind({})

React.args = {
    tagName: 'React',
    posts: 2139
}

export const JavaScript = Template.bind({})

JavaScript.args = {
    tagName: 'JavaScript',
    posts: 123
}

export const CPP = Template.bind({})

CPP.args = {
    tagName: 'C++',
    posts: 0
}

export const Storybook = Template.bind({})

Storybook.args = {
    tagName: 'Storybook',
    posts: 211231
}