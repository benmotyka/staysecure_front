import { Transition } from 'react-transition-group';

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0, display: 'block' },
  entered:  { opacity: 1, display: 'block' },
  exiting:  { opacity: 0, display: 'block' },
  exited:  { opacity: 0, display: 'none' },
};

const FadeIn = (props) => {
  return (
    <Transition in={props.in} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
       {props.children}
      </div>
    )}
  </Transition>
  )
}

export default FadeIn