import PageSelect from './PageSelect'

export default {
    title: 'PageSelect',
    component: PageSelect,
}

export const TenPages = () => <PageSelect count={10}></PageSelect>
export const NinetyNinePages = () => <PageSelect count={99}></PageSelect>