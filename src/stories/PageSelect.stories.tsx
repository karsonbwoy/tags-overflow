import PageSelect from './PageSelect'

export default {
    title: 'PageSelect',
    component: PageSelect,
}

export const TenPages = () => <PageSelect count={10}></PageSelect>
export const TwentyFivePages = () => <PageSelect count={25}></PageSelect>