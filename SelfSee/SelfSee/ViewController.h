//
//  ViewController.h
//  SelfSee
//
//  Created by Dani YoungSmith on 9/22/16.
//  Copyright © 2016 Dani YoungSmith. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MobileCoreServices/MobileCoreServices.h>

@interface ViewController : UIViewController <UIImagePickerControllerDelegate, UINavigationControllerDelegate>

@property (weak, nonatomic) IBOutlet UIImageView *imageView;
- (IBAction)openCamera:(id)sender;

@end

