import { Stack, styled } from "@mui/material";

export const StyledStack = styled(Stack)`
  .bell-icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #fff;
    border: 1.5px solid #e7e8ea;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-profile {
    background: #fff;
    border: 1.5px solid #e7e8ea;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    height: max-content;
    padding: 16px 24px;
    gap: 16px;
    > img {
      height: 45px;
      width: 45px;
    }
  }
`