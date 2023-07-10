import * as React from 'react';
import { ModalProps } from 'react-native';
interface Props extends ModalProps {
    children: React.ReactNode;
    show: boolean;
    backgroundColor?: string;
}
export default function Modal(props: Props): JSX.Element | null;
export {};
