// TODO: Create an interface for the Candidate objects returned by the API name, username, location, avatar, email, html_url, and company
export interface Candidate{
    name: string | null;
    login: string;
    location: string | null;
    avatar_url: string;
    email: string | null;
    html_url: string;
    company: string | null;

}