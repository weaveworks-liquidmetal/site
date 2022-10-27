/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial: DO try this at home',
      link: {
        type: 'generated-index',
        description: 'A basic tutorial. Use the core components to create a Liquid Metal platform and workload cluster on your local Linux machine.'
      },
      items: [
        'tutorial-basics/overview',
        'tutorial-basics/network',
        'tutorial-basics/containerd',
        'tutorial-basics/flintlockd',
        'tutorial-basics/capi',
        'tutorial-basics/create',
        'tutorial-basics/inspect',
        'tutorial-basics/teardown',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial: Equinix Platform',
      link: {
        type: 'generated-index',
        description: 'A more advanced tutorial. Create a Liquid Metal platform on Equinix Metal.'
      },
      items: [
        'tutorial-equinix/intro',
        'tutorial-equinix/terraform',
        'tutorial-equinix/inspect',
        'tutorial-equinix/capi',
        'tutorial-equinix/create',
        'tutorial-equinix/congratulations',
      ],
    },
    {
      type: 'link',
      label: 'Tutorial: Raspberry Pi Homelab',
      href: 'https://warehouse-13.github.io/cosmic/docs/intro',
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      items: [
        'guides/hardware',
        'guides/networking',
        'guides/flintlock',
        'guides/cluster-api',
        'guides/capmvm',
        'guides/authn',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'generated-index',
      },
      items: [
        'architecture/high-level',
        'architecture/microvm-networking',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
      },
      items: [
        'troubleshooting/flintlock',
        'troubleshooting/microvm',
        'troubleshooting/capmvm',
      ],
    },
  ],
  community: [
    'community/community',
    'community/support',
    'community/team',
    {
      type: 'category',
      label: 'Guide for Contributors',
      link: {
        type: 'generated-index',
        description: 'Your one-stop-shop for getting involved in Liquid Metal!',
      },
      items: [
        'community/contributing/welcome',
        'community/contributing/choices',
        'community/contributing/contributing',
        'community/contributing/support',
      ],
    },
    'community/requests',
    'community/bugs',
    'community/blog',
    'community/contact',
    'community/coc',
  ],
};

module.exports = sidebars;
