import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

const NavBar: FC = () => {
    const router = useRouter();

    return (
        <CustomNav>
            <Link href="/">Home</Link>

            {router.pathname !== '/favorite' && (
                <Link href="/favorite">Favorited page</Link>
            )}
        </CustomNav>
    );
};

export default NavBar;
