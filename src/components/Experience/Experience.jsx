import {React, useEffect} from 'react';
import styles from './Experience.module.scss';
import {SectionContainer, TitleContainer, CardContainer, ExperienceTimeSpan, ExperienceTitle, CardTags, CardList} from '../Containers/Containers';

const Experience = () => {

    useEffect(() => {
        const cardList = document.querySelector(`.${styles.cardlist}`);
        const cardContainers = document.querySelectorAll(`.${styles.cardcontainer}`);

        if (cardList) {
            const handleMouseEnter = () => {
                cardContainers.forEach(container => container.classList.add(styles.dimmed));
            };

            const handleMouseLeave = () => {
                cardContainers.forEach(container => container.classList.remove(styles.dimmed));
            };

            cardList.addEventListener('mouseenter', handleMouseEnter);
            cardList.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup event listeners on component unmount
            return () => {
                cardList.removeEventListener('mouseenter', handleMouseEnter);
                cardList.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return(
        <SectionContainer id='Experience'>
            <TitleContainer>
                <h2 className={styles.sectiontitle}>Experience</h2>
            </TitleContainer>
            <div>
                <CardList>
                    <li style={{marginBottom: '3rem'}}>
                        <CardContainer>
                            <ExperienceTimeSpan>
                                2024.08 - Present
                            </ExperienceTimeSpan>
                            <div className={styles.cardcontent}>
                                <ExperienceTitle
                                    href='https://www.google.com/'
                                    position='Big Data Analytics'
                                    department='UMSI'
                                />
                                <p className={styles.experiencecontent}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime aliquid praesentium dignissimos eveniet, totam obcaecati aperiam tempora repellat incidunt facere ea. Laborum odio veritatis nam totam facere recusandae fugit.
                                </p>
                                <CardTags tags={['Data Mining', 'Machine Learning', 'Web Design']} />
                            </div>
                        </CardContainer>
                    </li>

                    <li style={{marginBottom: '3rem'}}>
                        <CardContainer>
                            <ExperienceTimeSpan>
                                2021.09 - 2025.08
                            </ExperienceTimeSpan>
                            <div className={styles.cardcontent}>
                                <ExperienceTitle
                                    href='https://www.google.com/'
                                    position='Electrical and Computer Engineering'
                                    department='SJTU'
                                />
                                <p className={styles.experiencecontent}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime aliquid praesentium dignissimos eveniet, totam obcaecati aperiam tempora repellat incidunt facere ea. Laborum odio veritatis nam totam facere recusandae fugit.
                                </p>
                                <CardTags tags={['Circuit', 'Algorithm', 'Programming', 'Embedded System']} />
                            </div>
                        </CardContainer>
                    </li>

                </CardList>
            </div>
        </SectionContainer>
    );
}

export default Experience;