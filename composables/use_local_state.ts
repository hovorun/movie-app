import {
  ref,
  type UnwrapRef,
  type Ref,
} from 'vue';

export type TUseLocalState = <T>(initialValue: T | (() => T)) => [
    Ref<UnwrapRef<T>>,
    (val: UnwrapRef<T>) => void
];

export const useLocalState: TUseLocalState = <T>(initialValue: T) => {
  const value = typeof initialValue === 'function'
    ? initialValue()
    : initialValue;

  const initialValueRef = ref(value);
  const setValue = (val: UnwrapRef<T>) => {
    initialValueRef.value = val;
  };

  return [
    initialValueRef,
    setValue,
  ];
};
