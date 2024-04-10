const small = "12px";
const medium = "24px";
const large = "36px";

const CartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg width={small} height={small} viewBox="0 0 24 24" fill="none">
    <path
      d="M6 12H18M12 6V18"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg width={small} height={small} viewBox="0 0 24 24" fill="none" stroke="#000000">
    <path
      d="M6 12L18 12"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AddToCartIcon = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24.00 24.00"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g strokeWidth="0"></g>
    <g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.576"></g>
    <g>
      <path
        d="M21 5L19 12H7.37671M20 16H8L6 3H3M11.5 7L13.5 9M13.5 9L15.5 7M13.5 9V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

const ArrowIcon = () => (
  <svg
    fill="#000000"
    height="32px"
    width="32px"
    version="1.1"
    viewBox="-81.94 -81.94 675.97 675.97"
    stroke="#000000"
    strokeWidth="51.2094"
  >
    <g strokeWidth="0"></g>
    <g strokeLinecap="round" strokeLinejoin="round"></g>
    <g>
      <g>
        <g>
          <path d="M263.641,248.4L18.308,3.067c-4.16-4.053-10.987-3.947-15.04,0.32c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76 L3.268,493.733c-4.267,4.053-4.373,10.88-0.213,15.04c4.16,4.16,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213 L263.641,263.44C267.801,259.28,267.801,252.56,263.641,248.4z" />
          <path d="M508.974,248.4L263.641,3.067c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76 l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.16,4.16,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213 L508.974,263.44C513.135,259.28,513.135,252.56,508.974,248.4z" />
        </g>
      </g>
    </g>
  </svg>
);

const ArrowPrev = () => (
  <svg width={large} height={large} viewBox="0 0 24 24" fill="none">
    <path
      d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
      fill="#0F0F0F"
      stroke="#ffffff"
    />
  </svg>
);

const ArrowNext = () => (
  <svg width={large} height={large} viewBox="0 0 24 24" fill="none">
    <path
      d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
      fill="#0F0F0F"
      stroke="#ffffff"
    />
  </svg>
);

export { CartIcon, ArrowIcon, AddToCartIcon, PlusIcon, MinusIcon, ArrowNext, ArrowPrev };
