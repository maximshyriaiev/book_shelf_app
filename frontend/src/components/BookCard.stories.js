import BookCard from './BookCard';

export default {
    title: 'Components/BookCard',  // назва в Storybook
    component: BookCard,
    argTypes: {  // конфігурація пропсів для контролю в UI Storybook
        title: { control: 'text' },
        author: { control: 'text' },
    },
};

export const Default = {
    args: {
        title: 'Default Book Title',
        author: 'Default Author',
    },
};

export const LongTitle = {
    args: {
        title: 'Дуже Довга Назва Книги Для Тестування Відображення В Карточці',
        author: 'Автор З Довгим Іменем',
    },
};

export const NoAuthor = {
    args: {
        title: 'Книга Без Автора',
        author: '',
    },
};