const grapesJSStylings = `
  .highlight-animation {
    animation-name: highlight;
    animation-duration: 1s;
    animation-delay: 0.8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    background-size: 200% auto;
    background-image: linear-gradient(to right, rgba(255,0,0,0) 50%,var(--highlight-text-color) 50%);
    background-position: 0% 0;
  }

  @keyframes highlight {
    from {background-position: 0% 0;}
    to {background-position: -100% 0;}
  }
`

export default grapesJSStylings;
