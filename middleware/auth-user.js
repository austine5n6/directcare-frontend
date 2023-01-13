export default async function ({app, redirect}) {
        const user = await app.$cookies.get('auth._token.local')
        if (user) {
            return redirect('/dashboard')
        }else {
            //redirect to homepage
           return redirect('/login')
        }
}