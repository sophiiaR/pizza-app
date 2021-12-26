import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia adipisci dolorem 
                perspiciatis vitae deleniti, nam, delectus porro eligendi harum autem laboriosam 
                quidem accusamus ipsum. Facere error exercitationem assumenda repudiandae saepe?
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList;
