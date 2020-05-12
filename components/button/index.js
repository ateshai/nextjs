import styles from './button.module.scss';

export default function Home({value, onClick}) {
  const handleClick = () => onClick ? onClick() : false;

  return (
    <button className={ styles.button } onClick={ () => handleClick() }>
      { value }
    </button>
  )
} 