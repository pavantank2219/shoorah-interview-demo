import { Button, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)`
  width: 80%;
  max-height: 100%;
  overflow: auto;
  margin-top: 56px;
  border-radius: 16px;

  .info-banner{
    background: #FAFBFE;
    border: 1px solid #EDEEFC;
    padding: 12px;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 20px;

    img{
      margin-top: 5px;
      margin-right: 10px;
    }
  }

  .options-header {
    background: #f6f6f6;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px 16px 0 0;
  }

  .options-list {
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd;
  }

  .options-list:last-child {
    border-radius: 0 0 16px 16px;
    border-bottom: none;
  }

  .add-ons .options-list {
    width: 40%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #dddddd;
    border-radius: 16px;
    margin-bottom: 8px;
  }

  .floating-container{
    background: #fff;
    position: sticky;
    bottom: 0px;
    left: 0px;
    padding: 16px;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1); 
  }
`;

export const UpgradeButton = styled(Button)`
  background-color: #4F5ADF;
  color: #fff;
  width: max-content;
  height: 44px;
  font-weight: 500;
  text-transform: none;
  border-radius: 100px;
  padding: 8px 32px;
  font-weight: 600;
`;