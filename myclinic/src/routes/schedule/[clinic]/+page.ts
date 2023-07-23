/** @type {import('./$types').PageLoad} */
    export async function load({ params, url }) {
        const { clinic } = params;
        const { href } = url;
        
        return {
            props: {
                clinic,
                href
            }
        };
   
        
}