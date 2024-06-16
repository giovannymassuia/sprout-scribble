import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import BackButton from './back-button';
import Socials from './socials';

type Props = {
    children: React.ReactNode;
    cardTitle: string;
    backButtonHref: string;
    backButtonLabel: string;
    showSocial?: boolean;
};

export const AuthCard = ({ children, cardTitle, backButtonHref, backButtonLabel, showSocial }: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
            </CardHeader>

            <CardContent>{children}</CardContent>

            {showSocial && (
                <CardFooter>
                    <Socials />
                </CardFooter>
            )}

            <CardFooter>
                <BackButton
                    href={backButtonHref}
                    label={backButtonLabel}
                />
            </CardFooter>
        </Card>
    );
};
