export default function (options: {
    dark?: boolean
}) {
    const isNavbarDark = useState<boolean>('navbar-dark-mode')

    isNavbarDark.value = options.dark ?? isNavbarDark.value
}