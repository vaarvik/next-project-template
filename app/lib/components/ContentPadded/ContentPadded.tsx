import { ElementType, HTMLAttributes } from 'react';
import styles from './ContentPadded.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
    as?: ElementType;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    ignoreX?: boolean;
    ignoreY?: boolean;
}

export default function ContentPadded({
    as: HTMLTag = 'div',
    size = 'md',
    ignoreX = false,
    ignoreY = false,
    children,
    ...otherProps
}: Props) {
    const classNames = [
        styles['content-padded'],
        size ? styles[`content-padded--${size}`] : '',
        ignoreX ? styles['content-padded--ignore-x'] : '',
        ignoreY ? styles['content-padded--ignore-y'] : '',
    ].join(' ');

    return (
        <HTMLTag className={classNames} {...otherProps}>
            {children}
        </HTMLTag>
    );
}
