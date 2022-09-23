import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flintlock',
    Svg: require('@site/static/img/LM-LOGO-VERTICAL-LIGHTBACK.svg').default,
    description: (
      <>
        A service for creating and managing MicroVMs on bare metal, via Firecracker
        or Cloud Hypervisor.
      </>
    ),
  },
  {
    title: 'Cluster API Provider MicroVM',
    Svg: require('@site/static/img/capi-logo.svg').default,
    description: (
      <>
        A Cluster API Infrastructure Provider to provision MicroVMs as cluster
        nodes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
