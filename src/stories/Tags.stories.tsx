import Tags from './Tags'

export default {
    title: 'Tags',
    component: Tags,
}

const fakeData = [
    {
        tagName: 'React',
        posts: 1,
    },
    {
        tagName: 'JS',
        posts: 2,
    },
    {
        tagName: 'SB',
        posts: 3,
    },
    {
        tagName: 'C++',
        posts: 4,
    },
    {
        tagName: 'React',
        posts: 1,
    },
    {
        tagName: 'JS',
        posts: 2,
    },
    {
        tagName: 'SB',
        posts: 3,
    },
    {
        tagName: 'C++',
        posts: 4,
    },
    {
        tagName: 'React',
        posts: 1,
    },
    {
        tagName: 'JS',
        posts: 2,
    },
    {
        tagName: 'SB',
        posts: 3,
    },
    {
        tagName: 'C++',
        posts: 4,
    },
    {
        tagName: 'React',
        posts: 1,
    },
    {
        tagName: 'JS',
        posts: 2,
    },
    {
        tagName: 'SB',
        posts: 3,
    },
    {
        tagName: 'C++',
        posts: 4,
    },
    {
        tagName: 'React',
        posts: 1,
    },
    {
        tagName: 'JS',
        posts: 2,
    },
    {
        tagName: 'SB',
        posts: 3,
    },
    {
        tagName: 'C++',
        posts: 4,
    },
    {
        tagName: 'React',
        posts: 1,
    },
    {
        tagName: 'JS',
        posts: 2,
    },
    {
        tagName: 'SB',
        posts: 3,
    },
    {
        tagName: 'C++',
        posts: 4,
    },
    {
        tagName: 'React',
        posts: 1,
    },
    {
        tagName: 'JS',
        posts: 2,
    },
    {
        tagName: 'SB',
        posts: 3,
    },
    {
        tagName: 'C++',
        posts: 4,
    },

]

export const TenItems = () => <Tags fetchedData={fakeData.slice(0, 10)}></Tags>
export const TwentyItems = () => <Tags fetchedData={fakeData.slice(0, 20)}></Tags>
export const ThirtyItems = () => <Tags fetchedData={fakeData.slice(0, 30)}></Tags>