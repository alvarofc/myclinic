import type { LayoutServerLoad } from "./$types";


export const load : LayoutServerLoad = async ({locals: {getSession}}) => {
    return {
        data: {
            session: await getSession(),
        },
    }
};