import React from "react";
import ContentLoader from "react-content-loader"

function BurgerLoadingBlock() {
    return (
        
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="42 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="132" cy="142" r="115" />
        <rect x="0" y="273" rx="3" ry="3" width="280" height="26" />
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="418" rx="3" ry="3" width="91" height="31" />
        <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
      </ContentLoader>
    
       
    )
}

export default BurgerLoadingBlock