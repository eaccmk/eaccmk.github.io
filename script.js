// When the document is loaded...
    $(document).ready(function()
    {
        // Scroll the whole document
        $('#menu').localScroll({
           target:'body'
        });
 
        // Scroll the content inside the #scroll-container div
        $('#menu').localScroll({
           target:'#About'
        });
 
    });