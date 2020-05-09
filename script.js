// When the document is loaded...
    $(document).ready(function()
    {
        // Scroll the whole document
        $('#main').localScroll({
           target:'body'
        });

        // Scroll the content inside the #scroll-container div
        $('#main').localScroll({
           target:'#About'
        });

    }); 