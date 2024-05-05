import { Editor } from "@tinymce/tinymce-react"
import { ContextData } from "../../Providers/ContextProviders/ContextProviders";
import { useContext, useEffect, useMemo, useState } from "react";
const TinyMCE2 = () => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const {
        theme
    } = useContext(ContextData)
    const [currentTheme, setCurrentTheme] = useState(darkModeQuery.matches ? 'dark' : 'light')
    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }
    useEffect(() => {
        if (localStorage.theme === 'dark' || darkModeQuery.matches) {
            setCurrentTheme('dark')
        } else {
            setCurrentTheme('light')
        }
    }, [theme])

    const tinynce = useMemo(() => {
        return (
            <div className="dark:tinymce" >
                <Editor
                    apiKey="7wqqpnivnwdlll9bwskxtngeft74vderr5dfgalmxfdn6snf"
                    initialValue="<p>This is tinymce editor</p>"
                    init={{
                        selector: 'textarea',
                        height:150,
                        skin: `${currentTheme === 'dark' ? 'oxide-dark' : 'oxide'}`,
                        content_css: `${currentTheme === 'dark' ? "dark" : "light"}`,
                        plugins: 'link image code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                    }}
                    onChange={handleEditorChange}
                />
            </div>
        )
    }, [currentTheme])
    return tinynce
}
export default TinyMCE2