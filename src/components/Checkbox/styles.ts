import styled from 'styled-components';

export const Container = styled.div`
  .styled-checkbox {
    position: absolute; // take it out of document flow
    opacity: 0; // hide it

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    // Box.
    & + label:before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 1.5rem;
      border: 1px solid #d7d7d7;
      height: 1.5rem;
      background-color: #e7e9ee;
      border-radius: 50%;
    }

    // Box hover
    /* &:hover + label:before {
      background: #f35429;
    } */

    // Box focus
    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }

    // Box checked
    &:checked + label:before {
      background: var(--green);
      border: 1px solid var(--green);
    }

    // Disabled state label.
    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }

    // Disabled box.
    &:disabled + label:before {
      box-shadow: none;
      background: #ddd;
    }

    // Checkmark. Could be replaced with an image
    &:checked + label:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 10px;
      background: white;
      width: 3px;
      height: 3px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
        4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: rotate(45deg);
    }
  }
`;
