import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enfoque práctico',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        El curso ha sido diseñado con un enfoque práctico. En cada lección aprenderas casos de uso
        para que puedas aplicar ARIA sin miedo en tus proyectos.
      </>
    ),
  },
  {
    title: 'Buenas prácticas',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ARIA te dará un superpoder. En este curso aprenderás a usarlo correctamente, gracias a 
        las técnicas y recursos adicionales proporcionados.
      </>
    ),
  },
  {
    title: 'A tu ritmo, guiado',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pregunta en cualquier lección si tienes dudas. Estaré encantado de resolverlas y tener debates 
        con la comunidad.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
