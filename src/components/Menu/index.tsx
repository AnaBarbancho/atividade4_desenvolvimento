import styled from "styled-components";
import { MenuProps } from "../../types";



export default function Menu({children}:MenuProps) {
    return <Sld>                    
            {children}
            </Sld>;
}

const Sld = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`;